import fs from "fs";
import path from "path";

function activatePlugins() {
  const pluginsRoot = path.join(process.cwd(), "plugins");

  // Get all folders in the plugins root folder
  const folders = fs
    .readdirSync(pluginsRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const sandbox = {
    require: require,
  };

  // Execute the activate function in each folder using the sandboxed context
  folders.forEach(async (folder) => {
    const plugin = await import(`../../plugins/${folder}`);
    plugin.activate();
  });
}

activatePlugins();
