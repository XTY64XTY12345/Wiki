# Quick Start

This is the concise quick-start for Xdows Security 4.1. This release continues 4.0 design and focuses on compatibility and stability improvements.

## Introduction {#Info}

Xdows Security 4.1 is a lightweight protection and scanning suite aimed at preserving core detection capabilities while reducing resource usage and improving compatibility.

## Download {#Download}

Download the 4.1 packages (nightly/stable) from the releases page.

Read the included `README.txt` before installation. Nightly/beta builds are for testing; use cautiously in production.

<Linkcard url="https://github.com/XTY64XTY12345/Xdows-Security/releases/download/nightly/Xdows-Security-Signed.zip" title="Download Xdows Security Nightly" description="Ensure you can access GitHub" logo="/logo.svg"/>

## Kernel & Architecture {#Kernel}

4.1 continues the WebUI-driven architecture used in 4.0: the front-end is built with web technologies while the kernel handles scanning and system callbacks (Protection module). Compared to 3.0, the 4.x series couples the UI and kernel more closely for better customizability.

## Installation & Usage

1. Download the zip archive.
2. In Settings → Developer/Advanced, enable Developer Mode and allow unsigned PowerShell scripts to run.
> [!NOTE]
> Location and names may vary between Windows versions.
3. Run `install.ps1` with PowerShell.
4. Wait for the installer to complete.

## Differences vs 4.0

- 4.1 is a refactor of 4.0 focused on stability and compatibility; for full feature set refer to the 4.0 docs.

## Source references

- `Protection/` - protection callbacks
- `ScanEngine/` - scanning & heuristics
- `Xdows-Security/` - UI and application entry

## Implementation (important)

Note: Xdows-Security 4.1 is not a WebUI-based implementation — it is a WinUI3 + C# desktop application. Key points:

- Target framework: .NET 8 (`net8.0-windows10.0.19041.0`).
- UI: WinUI3 (Windows App SDK) using packages like `Microsoft.WindowsAppSDK` and `WinUIEx`. Windows use `AppWindow` with Mica/Acrylic backdrops.
- Architecture: the main app `Xdows-Security` references `Protection` and `ScanEngine` subprojects and loads native dependencies such as `SouXiaoEngine.dll` for detection.

Therefore, references to a WebUI or browser interaction are not applicable for 4.1 and this documentation treats 4.1 as a WinUI3/C# desktop implementation.

## Build & Run (developers)

1. Requirements: Windows 10/11 dev machine; install .NET 8 SDK and Visual Studio with Windows App SDK support.
2. Open `Xdows-Security.sln` and restore NuGet packages (includes Windows App SDK).
3. Choose platform (x86/x64/ARM64), build and run the `Xdows-Security` project.
4. Packaging: MSIX packaging is supported (MSIX tooling enabled in csproj); configure a signing certificate for publishing.

Tip: keep native dependencies like `SouXiaoEngine.dll` next to the project when building/running to avoid runtime errors.

## Implementation (important)

Note: Xdows-Security 4.1 is implemented as a native desktop application using WinUI3 and C#, not a WebUI. Key points:

- Target framework: .NET 8 (project uses `net8.0-windows10.0.19041.0`).
- UI: WinUI3 (Windows App SDK) with packages such as `Microsoft.WindowsAppSDK` and `WinUIEx`. Uses `AppWindow`, Mica/Acrylic system backdrops.
- Architecture: main app `Xdows-Security` references `Protection` and `ScanEngine` subprojects and depends on native DLLs such as `SouXiaoEngine.dll` for detection.

## Build & Run (for developers)

1. Requirements: Windows 10/11 dev machine; install .NET 8 SDK and Visual Studio with Windows App SDK support.
2. Open `Xdows-Security.sln`, restore NuGet packages (includes Windows App SDK). 
3. Select platform (x86/x64/ARM64), build and run the `Xdows-Security` project.
4. Packaging: the project supports MSIX packaging (MSIX tooling enabled in csproj); configure signing certificate for package publishing.

Note: Keep native dependencies like `SouXiaoEngine.dll` alongside the project when building/running to avoid runtime errors.
