import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    TODO: {
      schema: {
        dode: "bool",
        body: "string",
      }
    }
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
