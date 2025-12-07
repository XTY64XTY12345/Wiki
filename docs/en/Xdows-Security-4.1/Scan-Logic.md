# Scan Logic {#ScanLogic}

This document describes the scanning logic implemented in the Xdows Security Scan Page (targeting developers).

## Feature Overview {#Feature}

Offers four virus-scanning modes: **Quick**, **Full**, **File**, and **Folder**, with support for **multi-engine parallel scanning** and **asynchronous streaming UI updates**.

| Input | Output |
|-------|--------|
| Scan Mode + User Path + Engine Toggles | Real-time progress, threat list, statistics, log entries |

## Sequence Overview {#Sequence}

```mermaid
sequenceDiagram
    participant U as User
    participant V as View (SecurityPage)
    participant D as DispatcherQueue
    participant E as ScanEngine
    participant L as LogText

    U->>V: Click Scan
    V->>V: Validate Engine Toggles
    alt No Engine Enabled
        V-->>U: Dialog Prompt
    else
        V->>V: Enumerate Files
        loop Per File
            V->>E: Async Scan
            E-->>V: Result / Exception
            V->>D: Update Progress & List
            V->>L: Write Log
        end
        V->>D: Stop Animation
        V-->>U: Display Results
    end
```

## Engine Priority {#EnginePriority}

```ts
async function scanFile(path: string): Promise<string | null> {
  if (useSouXiao)        return await souXiaoScan(path);
  if (useLocal)          return await localScan(path, deep, extra);
  if (useJiSuSafeAXMode) return await AXScan(path, deep, extra);
  if (useCloud)          return await cloudScan(path);
  if (useCzkCloud)       return await czkCloudScan(path, apiKey);
  return null;                                       // safe
}
```

## Enumeration Strategy {#Enumeration}

| Mode | Scope | Key Implementation |
|------|-------|--------------------|
| **Quick** | Critical system folders + executable extensions | `EnumerateQuickScanFiles()` |
| **Full**  | All local drives | `SafeEnumerateFiles()` skips inaccessible nodes |
| **File**  | Single file | `PickSingleFileAsync()` |
| **Folder**| Recursive directory | `SafeEnumerateFolder()` uses stack + try-catch |

## State Machine {#StateMachine}

| State | Trigger | UI Indication |
|-------|---------|---------------|
| `Idle` | Initial / Scan finished | Buttons enabled, radar stopped |
| `Running` | `StartScanAsync` | Buttons disabled, radar spinning |
| `Paused` | `OnPauseScanClick` | Radar paused, resume button shown |
| `Canceled` | `token.Cancel()` | Status shows "Scan canceled" |

## Exception & Cancellation {#Exception}

```csharp
catch (OperationCanceledException)
{
    StatusText.Text = "Scan canceled";
}
catch (Exception ex)
{
    LogText.AddNewLog(4, "Security - Failed", ex.Message);
}
```
> [!NOTE] Note
> 
> Exceptions affect only the **current file**; the queue continues.

## Performance & Threading {#Performance}

| Item | Strategy |
|------|----------|
| **Concurrency** | One `Task.Run(...)` per file, loop delays 1 ms |
| **UI Refresh** | `DispatcherQueue.TryEnqueue` ensures thread safety |
| **I/O Blocking** | `SafeEnumerate*` patterns pre-catch permission issues |

## Log Format {#Logging}

| Level | Module | Event | Details |
|-------|--------|-------|---------|
| 1 | Security - StartScan | Use LocalScan-DeepScan CloudScan |
| 1 | Security - ScanFile | C:\Windows\notepad.exe |
| 1 | Security - Find | MEMZUAC.Cloud.VirusFile |

## FAQ {#FAQ}

::: details How to add a new scan engine? {#AddEngine}
1. Register a toggle in settings.
2. Read the toggle inside `StartScanAsync`.
3. Append `if (useNewEngine) result = await NewScanAsync(path);` in the engine chain.
4. Update the "Engine Priority" section of this doc.
:::

::: details Why does the UI stay responsive during large scans? {#UIThread}
All heavy work runs on the **ThreadPool**; UI updates are marshaled via `DispatcherQueue`.
:::

::: details Need incremental scanning? {#Incremental}
Cache `LastScanTime` and compare with `LastWriteTime` during enumeration to skip unchanged files.
:::