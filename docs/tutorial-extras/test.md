---
sidebar_position: 3
---

# This is Test Page

## Brightness Issue caused on

[Feb 5, 2024: Installed Fedora for first time in Lenovo Ideapad Gaming 3](https://www.notion.so/Feb-5-2024-Installed-Fedora-for-first-time-in-Lenovo-Ideapad-Gaming-3-a5c818b55bfb4513aeb1d06c47e5fa60?pvs=21)

point number 5

1. Editing grub

```bash
sudo nano /etc/default/grub
```

1. then change GRUB_CMDLINE_LINUX, just add missing argument, e.g. amdgpu.backlight=0" is missing in GRUB_CMDLINE_LINUX add it, leave existing arguments as it is:

```bash title="/etc/default/grub"
GRUB_CMDLINE_LINUX="amdgpu.backlight=0"
```

then update grub

```bash
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

and then reboot to see changes being applied.

## Another Component

```jsx title="~/sample/path/to/component.jsx"
import abc from "abc";

export const temp = () => (
    <abc></abc>;
)
```
