---
sidebar_position: 3
---

# This is Test Page

<center>
  ![banner](/img/bg.jpg)
</center>

## Brightness Issue caused on

[Feb 5, 2024: Installed Fedora for first time in Lenovo Ideapad Gaming 3](https://www.notion.so/Feb-5-2024-Installed-Fedora-for-first-time-in-Lenovo-Ideapad-Gaming-3-a5c818b55bfb4513aeb1d06c47e5fa60?pvs=21)

<center>
<a href="/img/bg.jpg" target="_blank">
  <img src="/img/bg.jpg" width="50%" />
</a>
</center>

point number 5

1. Editing grub

   ```bash
   sudo nano /etc/default/grub
   ```

1. then change `GRUB_CMDLINE_LINUX`, just add missing argument, e.g. `amdgpu.backlight=0` is missing in `GRUB_CMDLINE_LINUX` add it, leave existing arguments as it is:

   ```bash title="/etc/default/grub"
   GRUB_CMDLINE_LINUX="amdgpu.backlight=0"
   ```

   then update grub

   ```bash title="$sh"
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

## Details element example

<details>
  <summary>Toggle me!</summary>

    This is the detailed content

    ```js title="path/to/js"
    console.log("Markdown features including the code block are available");
    ```

    You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)

      <details>
        <summary>Nested toggle! Some surprise inside...</summary>

        😲😲😲😲😲

      </details>

</details>

## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js title="temp.js"
function helloWorld() {
  console.log("Hello, world!");
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

another example

<Tabs>
<TabItem value="js" label="JavaScript">

```bash
npm install --save @docusaurus/theme-mermaid
```

</TabItem>
<TabItem value="py" label="Python">

```bash
yarn add @docusaurus/theme-mermaid
```

</TabItem>
<TabItem value="java" label="Java">

```bash
pnpm add @docusaurus/theme-mermaid
```

</TabItem>
</Tabs>
