# Quick Start {#GetStarted}

Take a look at the next-generation antivirus built with **WinUI3** and **C#**.

## Introduction {#Info}

Xdows Security 4.1 is an antivirus solution built with `WinUI3` and `C#`.

## Download {#Download}

No direct download is available at the moment. Please join the [QQ Group](https://qm.qq.com/q/ybEtoc5rFe) to get the software.

## Scan Engines {#Engine}

| Name            | Description                                                                 | Open Source |
|-----------------|-----------------------------------------------------------------------------|-------------|
| Xdows Local     | Analyzes PE files using import/export tables and more.                      | Yes         |
| SouXiaoEngine   | Provided by `Mint`, supports multiple analysis methods.                     | No          |
| Cloud Engine    | Cloud scanning service provided by `MEMZUAC`.                               | No          |
| CzkCloud        | Cloud scanning service provided by `TianQiXingTu Network Tech`.             | No          |

::: tip Tip
CzkCloud is not available in the Nightly build due to API key protection.
:::

## Build and Run {#Build}

1. Requirements:
    1. Windows 10/11
    2. Visual Studio 2022 or higher with required workloads
    3. Git installed and able to access GitHub
2. Clone the repository:
```sh
git clone https://github.com/XTY64XTY12345/Xdows-Security
```
3. Open the solution `Xdows-Security.sln`.
4. Set the target platform (x86/x64/ARM64, x64 recommended), then build and run the project `Xdows-Security`.

TIP: Make sure to keep local dependencies like `SouXiaoEngine.dll` next to the project, or you may encounter runtime or build errors.