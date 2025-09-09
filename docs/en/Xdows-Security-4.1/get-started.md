 # Get Started {#GetStarted}

Take a look at the next-generation antivirus application built with `WinUI3` and `C#`.

## Introduction {#Info}

Xdows Security 4.1 is an antivirus application built with `WinUI3` and `C#`.

## Download {#Download}

Version 4.1 packages (nightly and stable) are available on the releases page — please choose the appropriate build to download.

Before installing, read the included `README.txt`. Nightly builds are provided for testing only; be cautious when installing them in production environments.

<Linkcard url="https://github.com/XTY64XTY12345/Xdows-Security/releases/download/nightly/Xdows-Security-Signed.zip"
 title="Download Xdows Security Nightly" description="Please ensure you can access GitHub" logo="/logo.svg"/>

The linked build is the `x64` build. If you need another architecture, please compile it yourself.

## Installation and Usage

1. Download the ZIP archive and extract it.
2. In Windows Settings → Developer options / Advanced settings enable Developer Mode and allow unsigned PowerShell scripts to run.
    > [!NOTE]
    > Different Windows versions may have different locations or names for these settings.
3. Use PowerShell to run `install.ps1`.
4. Wait for the installation to complete.

## Scan Engines

- Xdows Local: analyzes PE files using import/export tables and other methods; fully open-source.
- SouXiaoEngine: scanning engine provided by `WorkingCat`; uses multiple analysis techniques; closed-source.
- CzkCloud: cloud scanning service provided by `TianQiXingTu `Network Technology; because it requires a protected API key, this service is not supported in Nightly builds.

## Build and Run

1. Environment requirements: Windows 10/11; install Visual Studio 2022 and the required workloads; install Git and ensure it can access GitHub.
2. Clone the repository:

```sh
git clone https://github.com/XTY64XTY12345/Xdows-Security
```

3. Open the solution `Xdows-Security.sln`.
4. Set the target platform (x86/x64/ARM64 are available; x64 is recommended), then build and run the `Xdows-Security` project.
5. Packaging/Publishing: the project uses MSIX publishing settings (`EnableMsixTooling` enabled in the csproj). When publishing, configure a signing certificate (the csproj contains example certificate hints).

Note: keep local dependencies such as `SouXiaoEngine.dll` next to the project during build and run; otherwise runtime exceptions or build errors may occur.
