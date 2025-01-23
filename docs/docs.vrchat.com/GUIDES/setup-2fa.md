# 两步身份验证

**快速开始指南**

如果您想要为您的账号开启二步身份验证，您可以先[登录到您的VRChat账号](https://vrchat.com/home/login)，点击"编辑个人资料（Edit Profile）"，向下滚动到"两步验证（Two-Factor Authentication）"，然后按指示完成设置。

如果您需要更详细的步骤，请继续阅读此文档。

::: tip 📘需要帮助？
如果您失去了验证器的访问权限，请阅读[这里](./setup-2fa#帮帮我我失去了验证器应用的访问权限)。
:::

## 什么是两步验证？

虽然用户名和密码能一定程度上保护您的账号不被盗用，但有时它并不完全是天衣无缝的。攻击者仍然可以通过猜测、窃取或欺骗的方式来盗取您的账号。

两步验证将会使用额外的登录步骤来保护您的账号。在您输入用户名和密码之后，您需要输入一个由您的手机或其他设备上的应用随机生成的密钥。

因为黑客不大可能偷走您的手机等设备，所以您可以确信，即使他们窃取了您的密码，也没有其他人可以登录您的账号！但这种方法唯一的缺点是，您需要在登录时使用您设备上的验证器来进行验证。


::: warning 🚧请确保您的密码是足够安全的！
虽然两步验证可以进一步保护您的账号，但**您依旧应该确保您使用的密码足够复杂，并且在其他地方都没有被使用过**。这是一个非常好的习惯，并且我们建议您使用密码管理器来保存您的密码。
:::

## 谁可以使用两步验证？

VRChat 的两步验证仅为使用 VRChat 账号登录的用户提供。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-1.png)

*如果您使用这种方法登录，那么这份文档就是为您准备的。*

</center>

换句话说，既不是[ Oculus ID ](https://support.oculus.com/167473950508878/)、[ Steam ID ](https://support.steampowered.com/kb\_article.php?ref=1266-OAFV-8478)，也不是[ Viveport ](https://service.viveport.com/hc/en-us/sections/360003946651-Login-Security)。如果您没有使用 VRChat 账号登录，并且想使用两步验证，那么请您查看 Oculus ID，Steam ID 或 Viveport 的相关用户手册。

## 设置两步验证

在您的网页浏览器中，转到 VRChat 网站并[登录您的账号](https://vrchat.com/home/login)。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-2.png)

</center>

登录后，请点击左上角的"编辑个人资料"按钮。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-3.png)

</center>

向下滚动到"两步验证"部分，并点击"启用"。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-4.png)

</center>

### 步骤1：下载验证器应用

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-5.png)

</center>

[Authy](https://authy.com/download/) 是一个很优秀的两步验证应用，您可以既可以在手机上也可以在电脑上运行它。此外，Authy 允许您将您的账号备份到他们的服务器中，所以您的两步验证代码是绝对安全的。如果您担心更换或意外的遗失了您的设备，会让您无法访问验证器时，这可能是最好的应用之一。（译者同样推荐[ 微软二步验证器 ](https://www.microsoft.com/zh-cn/security/mobile-authenticator-app)）

点击"Next >"以进行下一步操作。

### 步骤2：将您的 VRChat 账号添加到您的验证器中

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-6.png)

</center>

如果您使用您电脑浏览网站，并使用 Authy 验证器，那么操作将会非常简单。

1. 打开 Authy 。
2. 点击右上角的 "..." "Add Account"。
3. 点击 "Scan QR Code" 并扫描网页上呈现的二维码。

扫描完成后，验证器将会把 VRChat 添加到其账号列表中。它应该在列表中显示为 "VRChat" 、一个六位数字代码以及您用户名的电子邮件地址。该代码每 30 秒会随机改变一次。

如果您无法扫描二维码，又或者您是在手机上浏览的网页。那么您需要点击 "enter the key manually"。这将会显示一长串文本。请您复制整段内容。然后转到您的 Authy 验证器，并按照上面的相同方法，但在第三步时选择 "Enter Code Manually" 而非 "Scan QR Code" ,然后将复制过的文本粘贴至该输入框。

然后在 VRChat 网站上，点击 "Next >" 以进行下一步。

### 步骤3：使用验证器应用代码验证自己的账号

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-7.png)

</center>

在验证器应用中找到并在上图位置为您的 VRChat 账号输入 6 位代码，并在网站上的对话框中点击“验证 (Verify) ”按钮。

## 如果它没有用的话我该怎么办

首先请您确认：

* 您的验证器代码是否已经改变。它每 30 秒会更改一次。
* 您是否输入了正确的代码

如果它还是没有办法正常使用，也请您不用担心，您可以按灰色的“取消 (Cancel) ”按钮放弃二步验证的设置。

## 成功了！！

如果一切顺利，您将会看到“您正在使用额外的登录步骤保护您的账号。”

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-8.png)

</center>

从现在开始，在您尝试登陆 VRChat 时，VRChat 可能会要求您输入在验证器应用中生成的代码 - 如果您在不同的位置，或者很久都没有登陆 VRChat 时，VRChat 可能会频繁的要求您输入代码。

在此页面上，您还会看到有关“恢复代码”的一些信息。如果您丢失或损坏了手机，又或是其他原因导致您无法获得验证器上显示的代码，您可以使用 “恢复代码” 来登录 VRChat 账号。

我们强烈建议您下载“恢复代码”并将其存储在安全的地方。您可能需要输入验证器上生成的代码来下载或查看“恢复代码”。有关如何使用这些代码的更多信息，请参见“[帮帮我，我丢失了验证器应用的访问权限](./setup-2fa#帮帮我我失去了验证器应用的访问权限)”。

::: danger ❗️账号丢失的风险！
请您务必下载并妥善保管您的恢复代码。尽量避免在可能丢失的设备上存储唯一的恢复代码，或者将其存放在您用于身份验证的同一设备上，例如您的手机。如果发生手机丢失的情况，您将同时失去验证器和恢复代码的保障。

**请务必下载并妥善保存您的恢复代码。若您未能采取这一措施，可能会面临永久失去对您账号的访问权限的风险。**。如果我可以让他看起来更可怕一些，我会的。然而，这种风险也是让二步验证安全的一部分原因。
:::

## **如何使用验证器应用登录 VRChat**

### VRChat 客户端

在您输入用户名和密码后，您将被提示输入验证器应用中的 6 位身份验证代码。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-9.png)

</center>

打开验证器应用以获得 VRChat 账号的 6 位代码。点击“*Enter code here...*”的输入框之后，将会出现一个虚拟键盘。

查看您的验证器应用以获取当前的代码。输入代码并按“确定(OK)”。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-10.png)

</center>

接下来，点击代码输入框旁边的"验证(Verify)"按钮。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-11.png)

</center>

如果代码不起作用，您会看到这样的消息。您可以点击确定并再试一次。

检查您是否输入了错误的代码，或者代码是否已经改变。它每 30 秒更改一次。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-12.png)

</center>

### 网站

在输入用户名和密码后，您将被提示输入验证器应用中的 6 位身份验证代码。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-13.png)

</center>

### 开发者SDK

这仅适用于使用 VRCSDK 为 VRChat 创作内容的创作者。

在输入您的用户名和密码后，您将被提示输入验证器应用中的 6 位身份验证代码。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-14.png)

</center>

## 帮帮我，我失去了验证器应用的访问权限！

如果您丢失了带有验证器应用的设备，或者其数据被删除的话，别担心！您仍然可以使用恢复代码登录 VRChat。（还记得我们提醒您要安全保存它们吗？）

首先，找到那些恢复代码！示例如下：

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-15.png)

</center>

然后，使用用户名和密码[登录 VRChat 网站](https://vrchat.com/home/login)。当您进入两步验证页面时，点击“使用恢复代码(Use a recovery code instead)”。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-16.png)

</center>

在输入框中输入一个恢复代码。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-17.png)

</center>

如果操作成功，您就需要在您的恢复代码文档上，删除或划掉您已经使用过的代码，因为每个代码只能使用一次。

您现在应该已经能够登录到 VRChat 中了。

下一步将取决于您想要做什么。

如果您认为很快可以找回，并重新使用您的验证器程序，那么您可以使用恢复代码正常登录到 VRChat 。但请小心，您有且只有十个恢复代码！

如果您认为可能已经永久丢失了验证器应用或其数据，请立即[禁用您的两步验证](./setup-2fa#禁用两步验证)。然后您可以从头开始，并重新设置两步验证。

### 开发者SDK

仅供 SDK 开发者使用。

您也可以使用恢复代码登录到 **VRChat SDK** 。但是，这不应成为您常用的登录方式。请记住，每个恢复代码只能使用一次！

您可以使用标准的两步验证输入框来输入您的恢复代码。

## 禁用两步验证

像之前一样，前往网站上的“编辑个人资料(Edit Profile)”。滚动至“两步验证”并点击“禁用”按钮。

您可能需要借助您的验证器代码，或恢复代码来再次验证自己的身份。

**重要提示**：在您禁用两步验证后，*旧的验证器代码将不再有效，恢复代码也将无法使用。*。如果您选择重新启用两步认证，您将需要从头开始设置您的验证器。

<center>

![img](https://cn-nb1.rains3.com/docs-image/controls/setup-2fa-22.png)

</center>
