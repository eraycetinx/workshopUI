# Screen Folder Structure

Create new folder for each navigation for example, an Auth file is created for an Auth navigation, and the files to be used in the Auth navigation (SignIn, SignUp, ForgotPassword, Welcome) are added under it. If the added file has a subnavigation, a folder for that file is created (Profile -> Settings -> UserSettings).


#### If it's hasn't a subnavigations its looks like this.
```
Auth               (navigation folder)
 |- SignIn         (file)
 |- SignUp         (file)
 |- Welcome        (file)
 |- ForgotPassword (file)
```

#### If it's has subnavigations its looks like this.

```
Profile            (Main Navigation folder)
 |- Profile        (file)
 |- Settings       (settings navigation it's a folder)
   |- UserSettings (file)
   |- Privacy      (file)
   |- Settings     (file)

````
