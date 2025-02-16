---
sidebar_position: 4
---

# Fixing Brave Touchpad Gestures on Wayland

1.  Open Brave and type brave://flags, find feature named: **Preferred Ozone platform,** and set it to wayland and restart the browser.
2.  Now Your zoom gestures will work fine, but navigation gestures won’t(swipe left/right to go back/forward).
3.  but if you type: **brave-browser --enable-features=TouchpadOverscrollHistoryNavigation**; into terminal your navigation gesture should work properly.
4.  So, let’s update Brave Browser Application to open with **TouchpadOverscrollHistoryNavigation**
5.  goto **/usr/share/applications/**

    ```jsx
    cd /usr/share/applications/
    ```

6.  There you will find file named: **brave-browser.desktop**
7.  open that file with sudo previlege, and add “**--enable-features=TouchpadOverscrollHistoryNavigation”** to every line that starts with **“Exec=”**, e.g.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
    <TabItem value="before" label="Before">
        ```jsx title="/usr/share/applications/"
        Exec=/usr/bin/brave-browser-stable %U
        ```
    </TabItem>
    <TabItem value="after" label="After">
        ```jsx title="/usr/share/applications/"
        Exec=/usr/bin/brave-browser-stable %U --enable-features=TouchpadOverscrollHistoryNavigation
        ```
    </TabItem>
</Tabs>

there might be more than one line with **“Exec=”**, add given text to all those line, then logout and login again.
