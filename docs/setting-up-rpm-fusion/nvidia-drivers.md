---
sidebar_position: 4
---

# Nvidia Drivers

## About this Howto

This howto will help you install the correct NVIDIA driver on Fedora for your graphics card as well as troubleshoot common driver problems.

The prerequisite is to have followed the Configuration page to have at least the RPM Fusion nonfree section available. -

## Determining your card model

NVIDIA has several driver series, each of which has different hardware support. To determine which driver you need to install, you'll first need to find your graphics card model.

If you don't know it, open a Terminal (Applications > System Tools > Terminal) and type:

```bash
/sbin/lspci | grep -e VGA
```

You can also check the supported chips section and see which series is recommended for you card, then install the appropriate driver series. Please remember that you need additional steps for optimus.

You are probably in the Optimus case if your NVIDIA card is found with the next command:

```bash
/sbin/lspci | grep -e 3D
```

## Installing the drivers

Please remember that once the driver is installed, there is no need to configure xorg.conf by default. Changes will take effect after a full reboot on the newest kernel.

:::warning
The **Secure Boot**: Please have a look on [Howto/Secure Boot](https://rpmfusion.org/Howto/Secure%20Boot) in order to sign the nvidia kmod. You will have to enter the BIOS/EFI to import your self generated key.
:::

### Current GeForce/Quadro/Tesla

Supported on current stable Xorg server release.

This driver is suitable for any GPU found in 2014 and later.

:::info
The 510+ driver is available by default on Fedora 34+ and later and has dropped support for some older Kepler GPU.
:::

```bash
sudo dnf update -y # and reboot if you are not on the latest kernel
sudo dnf install akmod-nvidia # rhel/centos users can use kmod-nvidia instead
sudo dnf install xorg-x11-drv-nvidia-cuda #optional for cuda/nvdec/nvenc support
```

:::info
After the RPM transaction ends, please remember to wait until the kmod has been built. This can take up to 5 minutes on some systems.
:::

Once the module is built, "modinfo -F version nvidia" should outputs the version of the driver such as 440.64 and not modinfo: ERROR: Module nvidia not found.

If you are not running on the latest kernel, use -k to mention the latest one like in modinfo -F version nvidia -k 6.12.6-200.fc41.x86_64
