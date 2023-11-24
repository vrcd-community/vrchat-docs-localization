# 两步身份验证

**快速开始指南**

熟悉这种操作吗？[登录到您的VRChat账户](https://vrchat.com/home/login)，点击"编辑个人资料（Edit Profile）"，向下滚动到"两步验证（Two-Factor Authentication）"，然后按照说明操作。

需要更详细的步骤吗？请继续阅读这篇文章。

::: tip 📘需要帮助？
如果您失去了验证器的访问权限，请阅读[这里](./setup-2fa#帮帮我我失去了验证器应用的访问权限)。
:::

## 什么是两步验证？

虽然用户名和密码是一种好的账户保护形式，但有时它不足以保障安全。攻击者仍然可以猜测您的密码、窃取您的密码或欺骗您从而泄露您的密码。

两步验证通过额外的登录步骤帮助保护您的账户。在输入用户名和密码之后，您需要输入一个由您的手机或其他设备上的应用生成的额外密钥。

因为您的设备只有您一人拥有，所以您可以确信，即使他们窃取了您的密码，也没有其他人可以登录！但缺点是登录时您需要使用那个设备来进行验证。


::: warning 🚧请确保您的密码是复杂且独特的！
两步验证可以帮助保护您的账户，但**您应该确保您使用的密码较为复杂并且在互联网上的其他地方都没有使用过**。对于所有的服务来说，这都是一个好习惯！我们建议您使用密码管理器。
:::

## 谁可以使用两步验证？

VRChat的两步验证是为注册了VRChat账户的用户提供的。

<center>

![img](/docs.vrchat.com/images/setup-2fa-1.png)

*如果您使用这种方法登录，那么这份文档就是为您准备的。*

</center>

换句话说，不能是[ Oculus ](https://support.oculus.com/167473950508878/)账户、[ Steam ](https://support.steampowered.com/kb\_article.php?ref=1266-OAFV-8478)账户，也不能是[ Viveport ](https://service.viveport.com/hc/en-us/sections/360003946651-Login-Security)账户。如果您使用其中一种第三方登录，并且想使用两步验证，请查看 Oculus，Steam 或 Viveport 的相关用户手册及说明。

## 设置两步验证

在您的网页浏览器中，转到 VRChat 网站并[登录您的账户](https://vrchat.com/home/login)。

<center>

![img](/docs.vrchat.com/images/setup-2fa-2.png)

</center>

登录后，请点击左上角的"编辑个人资料"按钮。

<center>

![img](/docs.vrchat.com/images/setup-2fa-3.png)

</center>

向下滚动到"两步验证"部分，并点击"启用"。

<center>

![img](/docs.vrchat.com/images/setup-2fa-4.png)

</center>

### 步骤1：下载验证器应用

<center>

![img](/docs.vrchat.com/images/setup-2fa-5.png)

</center>

[Authy](https://authy.com/download/) 是一个很好的两步验证应用，您可以在手机或电脑上运行它。此外，Authy 允许您使用只有您知道的加密密码将您的账户备份到他们的云端，所以您的 2FA 代码是安全的。如果您担心因为各种原因导致的数据丢失，这可能是最好的应用之一。（译者同样推荐[Microsoft Authenticator(微软两步验证器)](https://www.microsoft.com/zh-cn/security/mobile-authenticator-app)）

点击"Next >"以进行下一步操作。

### 步骤2：将您的VRChat账户添加到您的验证器应用

<center>

![img](/docs.vrchat.com/images/setup-2fa-6.png)

</center>

如果您使用PC浏览网站，并使用Authy验证器，那么操作非常简单。

1. 打开 Authy。
2. 点击右上角的“...”以添加新的账户。
3. 点击“扫描QR码”并扫描显示的二维码。

验证器将会把VRChat添加到其网站列表中。它应该显示为VRChat”、一个六位数字代码以及您用户名的电子邮件地址。该代码每30秒会改变一次。

如果您无法扫描二维码，或者说您是在手机上浏览的网页。那么您需要点击"手动输入密钥"。这将会在网页上显示一个文本密钥。它由一长串字母和数字组成。请您复制整段内容。然后切换到Authy验证器，并按照上面的相同方法进行操作，但这次您选择“手动输入”而非“扫描QR码”。然后粘贴该密钥。

在VRChat网站上，点击"Next >"以进行下一步。

### 步骤3：使用验证器应用代码验证自己的账户

<center>

![img](/docs.vrchat.com/images/setup-2fa-7.png)

</center>

在验证器应用中找到并在上图位置为您的 VRChat 账户输入6位代码，并在网站上的对话框中点击“验证(Verify)”按钮。

## 如果它不起作用

请检查：

* 您的验证器代码是否已经改变。它每30秒变化一次。
* 您是否正确的输入了代码

如果您不能使其正常工作，别担心。您的用户名和密码仍然像以前一样有效。您可以按灰色取消按钮放弃设置二步验证。

## 成功了！！

如果一切顺利，您将看到一条消息说：“您正在使用额外的登录步骤保护您的账户。”

<center>

![img](/docs.vrchat.com/images/setup-2fa-8.png)

</center>

从现在开始，每当您登录时，VRChat可能会要求您输入验证器应用代码 - 尤其是如果您很久没有输入代码，或者看起来您正在从一个新的位置登录。

在此屏幕上，您还会看到有关恢复代码的一些信息。如果您丢失或损坏了手机，或者其他原因无法获得这些应用代码，恢复代码可以帮助您登录。

我们强烈建议您下载恢复代码并将其存储在安全的地方。您可能需要提供另一个两步验证代码以下载或查看恢复代码。有关如何使用这些代码的更多信息，请参见“[帮帮我，我丢失了验证器应用的访问权限](./setup-2fa#帮帮我我失去了验证器应用的访问权限)”。

::: danger ❗️账户丢失的风险！
请您务必下载您的恢复代码并保管好。请不要在您可能丢失的设备上只存有唯一的一个副本，或者将副本存在您用于身份验证的同一设备上-比如您的手机。这样的话如果您丢失了手机，您就失去了您的验证方法和备份（恢复）代码。

**请下载您的恢复代码并保管好。如果您没有这样做，您可能会永久失去对您账户的访问权限**。如果我能用语言来描述这个无比可怕的后果，我也会这样做的。这种风险也是使2FA安全的部分原因。
:::

## **如何使用验证器应用登录VRChat**

### VRChat客户端

在您输入用户名和密码后，您将被提示输入验证器应用中的6位身份验证代码。

<center>

![img](/docs.vrchat.com/images/setup-2fa-9.png)

</center>

打开验证器应用以获得 VRChat 账户的6位数字代码。点击“*Enter code here...*”的字段之后，将会出现一个虚拟键盘。

查看您的验证器应用以获取验证代码。输入代码并按“确定(OK)”。

<center>

![img](/docs.vrchat.com/images/setup-2fa-10.png)

</center>

接下来，点击代码输入字段旁边的"验证(Verify)"按钮。

<center>

![img](/docs.vrchat.com/images/setup-2fa-11.png)

</center>

如果代码不起作用，您会看到这样的消息。点击确定再试一次。

检查您是否输入错误的代码，或者代码是否已经改变。它每30秒变化一次。

<center>

![img](/docs.vrchat.com/images/setup-2fa-12.png)

</center>

### 网站

在提供用户名和密码后，您将被提示输入验证器应用中的6位身份验证代码。

<center>

![img](/docs.vrchat.com/images/setup-2fa-13.png)

</center>

### 开发者SDK

这仅适用于使用 VRCSDK 为 VRChat 创作内容的开发人员。

在输入您的用户名和密码后，您将被提示输入验证器应用中的6位身份验证代码。

<center>

![img](/docs.vrchat.com/images/setup-2fa-14.png)

</center>

## 帮帮我，我失去了验证器应用的访问权限！

如果您失去了带有验证器应用的设备，或者其数据被删除，您仍然可以使用恢复代码登录 VRChat。（还记得我们告诉您要妥善保存它们吗？）

首先，找到那些恢复代码！它应该看起来像这样：

<center>

![img](/docs.vrchat.com/images/setup-2fa-15.png)

</center>

然后，使用用户名和密码[登录VRChat网站](https://vrchat.com/home/login)。当您进入两步验证屏幕时，点击“使用恢复代码(Use a recovery code instead)”。

<center>

![img](/docs.vrchat.com/images/setup-2fa-16.png)

</center>

在输入框中输入一个恢复代码。

<center>

![img](/docs.vrchat.com/images/setup-2fa-17.png)

</center>

如果成功了，在您的恢复代码文档上，删除或划掉您使用过的代码。

您现在应该已经能够登录到 VRChat 中了。

下一步将取决于您想要什么。

如果您认为很快可以重新使用您的验证器程序，那么您可以使用恢复代码正常登录到 VRChat。但请小心，您只有十个恢复代码！请查看[使用恢复代码登录到VRChat客户端](./setup-2fa#两步身份验证)。

如果您认为可能已经永久丢失了验证器应用或其数据，请[禁用您的两步验证](./setup-2fa#禁用两步验证)。然后您可以从头开始设置两步验证。

### 使用恢复代码登录到VRChat客户端：

这不应该是您通常的登录方法；请记住，您只能使用每个恢复代码一次！

在两步验证屏幕上，点击“使用恢复代码”。

<center>

![img](/docs.vrchat.com/images/setup-2fa-18.png)

</center>

它与“使用验证器应用程序代码登录”非常相似。点击“*在此输入代码...(Enter code here...)*”以进入恢复代码输入屏幕。

<center>

![img](/docs.vrchat.com/images/setup-2fa-19.png)

</center>

输入您的恢复代码，并点击“确认(Ok)”

<center>

![img](/docs.vrchat.com/images/setup-2fa-20.png)

</center>

最后，单击验证(Verify)按钮,您将能够登录到VRChat中。

<center>

![img](/docs.vrchat.com/images/setup-2fa-21.png)

</center>

### 开发者SDK

仅供 SDK 开发者使用。

您也可以使用恢复代码登录到 **VRChat SDK** 。但是这不应该是您通常的登录方法；请记住，您只能使用每个恢复代码一次！

您可以简单地使用标准的二步验证 2FA 输入框来输入您的恢复代码。

## 禁用两步验证

像之前一样，前往网站上的“编辑个人资料(Edit Profile)”。滚动至“两步验证”并点击“禁用”按钮。

您可能需要再次验证自己的身份。您可以使用常规的验证器应用程序代码或恢复代码。

**重要提示**：在您禁用二步验证后，*旧的验证器生成的应用程序代码将不再工作，恢复代码也是如此*。如果您重新启用二步认证，您将需要从头开始设置您的验证器。

<center>

![img](/docs.vrchat.com/images/setup-2fa-22.png)

</center>
