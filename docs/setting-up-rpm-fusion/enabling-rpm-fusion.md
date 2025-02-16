---
sidebar_position: 2
---

# Enabling RPM Fusion

## Command Line Setup using rpm

To enable access to both the free and the nonfree repository use the following command:

- Fedora with dnf:

  ```bash
  sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
  ```

- On Fedora, we default to use the openh264 library, so you need the repository to be explicitly enabled.

  - On Fedora 41 and later:

    ```bash
    sudo dnf config-manager setopt fedora-cisco-openh264.enabled=1
    ```

  - On Fedora up to 40, the command is as follow:
    ```bash
    sudo dnf config-manager --enable fedora-cisco-openh264
    ```

## AppStream metadata

RPM Fusion repositories also provide [Appstream metadata](https://www.freedesktop.org/wiki/Distributions/AppStream/) to enable users to install packages using Gnome Software/KDE Discover. Please note that these are a subset of all packages since the metadata are only generated for GUI packages.

For the current Fedora releases: the suggested method is to install appstream-data using DNF.

- The following command will install the required group of packages:

  ```bash
  sudo dnf update @core
  ```
