{
  description = "A Nix Flakes Node.js development environment";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1.*.tar.gz";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  }: let
    overlays = [
      (final: prev: rec {
        nodejs = prev.nodejs_latest;
        corepack = prev.corepack_latest;
      })
    ];
    supportedSystems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];
    forEachSupportedSystem = f:
      nixpkgs.lib.genAttrs supportedSystems (system:
        f {
          pkgs = import nixpkgs {inherit overlays system;};
        });
  in {
    devShells = forEachSupportedSystem ({pkgs}: {
      default = pkgs.mkShell {
        packages = with pkgs; [node2nix nodejs corepack];
        shellHook = ''
          # Disable download prompt for corepack
          export COREPACK_ENABLE_DOWNLOAD_PROMPT=0
          echo "node version: `${pkgs.nodejs}/bin/node --version`"
        '';
      };
    });
  };
}
