# Quick Start {#GetStarted}

Check out the next-generation antivirus software built on `WinUI3` + `C#` technology

## Introduction {#Info}

Xdows Security 4.1 is an antivirus software built on `WinUI3` + `C#` technology.

## Download {#Download}

<Linkcard url="https://github.com/XTY64XTY12345/Xdows-Security/releases" title="Download Xdows Security Beta" description="https://github.com/XTY64XTY12345/Xdows-Security/releases" logo="/logo.ico"/>

## Scan Engine {#Engine}

| Name | Description | Open Source |
|-----|------|------|
| Xdows Local | Analyzes PE files using import tables, export tables, and other methods | Fully open source |
| SouXiaoEngine | Scanning engine provided by `Mint`, based on multiple analysis methods | Not open source |
| Cloud-based Scan Engine | Cloud scanning service provided by `MEMZUAC` | Not open source |
| CzkCloud | Cloud scanning service provided by `Tianqixingtu Network Technology` | Not open source |

::: tip Tip
 To protect the ApiKey, CzkCloud is not supported in the Nightly version
:::


## Build and Run {#Build}

1. Environment requirements:
    1. Windows 10/11
    2. Install VS2022 or higher and related workloads
    3. Install Git and ensure you can access GitHub normally.
2. Clone the repository
```sh
git clone https://github.com/XTY64XTY12345/Xdows-Security
```
3. Open with VS and build

> [!NOTE] Unable to build
> 
> Because the SouXiao provider `Mint` does not open source its related content, simply remove references related to SouXiao