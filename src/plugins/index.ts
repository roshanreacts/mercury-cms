import fs from "fs";
import path from "path";
import vm from "vm";
import dynamic from "next/dynamic";

function activatePlugins() {
  const pluginsRoot = path.join(process.cwd(), "plugins");
  console.log("activate plugins", pluginsRoot);
  console.log("Workspace root directory:", process.cwd());

  // Get all folders in the plugins root folder
  const folders = fs
    .readdirSync(pluginsRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Create a sandboxed context with limited access
  //   const sandbox = {
  //     require: (modulePath: string) => {
  //       // Restrict require to only load modules within the plugins folder
  //       const resolvedPath = path.resolve(pluginsRoot, modulePath);
  //       if (resolvedPath.startsWith(pluginsRoot)) {
  //         return require(resolvedPath);
  //       } else {
  //         throw new Error("Access denied");
  //       }
  //     },
  //   };

  const sandbox = {
    require: require,
  };

  // Execute the activate function in each folder using the sandboxed context
  folders.forEach((folder) => {
    const pluginPath = path.join(pluginsRoot, folder);
    const code = fs.readFileSync(pluginPath + "/index.js", "utf-8");
    vm.createContext(sandbox);
    // vm.runInContext(eval(code), sandbox, { filename: pluginPath });
    vm.runInThisContext(eval(code))(sandbox);
  });
}

activatePlugins();
