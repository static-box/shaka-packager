import * as path from "path";
import * as os from "os";
const arch = os.arch();
const platform = os.platform();
const version = "2.6.1";
const win32Version = "2.5.1";
export const packagerMap = {
  "linux-arm64": {
    path: path.resolve(__dirname, "../assets/2.6.1/packager-linux-arm64"),
    version,
  },
  "linux-x64": {
    path: path.resolve(__dirname, "../assets/2.6.1/packager-linux-x64"),
    version,
  },
  "osx-x64": {
    path: path.resolve(__dirname, "../assets/2.6.1/packager-osx-x64"),
    version,
  },
  "win-x64": {
    path: path.resolve(__dirname, "../assets/2.6.1/packager-win-x64.exe"),
    version,
  },
  "win-x32": {
    path: path.resolve(__dirname, "../assets/2.5.1/packager-win.exe"),
    version: win32Version,
  },
};

const getStaticPath = () => {
  if (platform === "darwin") {
    return packagerMap["osx-x64"].path;
  } else if (platform === "linux") {
    if (arch === "arm" || arch === "arm64") {
      return packagerMap["linux-arm64"].path;
    } else {
      return packagerMap["linux-x64"].path;
    }
  } else if (platform === "win32") {
    if (arch === "x32") {
      return packagerMap["win-x32"].path;
    } else {
      return packagerMap["win-x64"].path;
    }
  } else {
    return "";
  }
};

export const packager = getStaticPath();
