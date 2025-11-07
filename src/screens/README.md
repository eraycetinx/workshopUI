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

### With Style
If you need a style, you must create a folder. The folder name is screen/component/ui (where you're using it, for example, Home). Since we're writing our main code here, you should use Home.tsx. Our style code should be written as HomeStyle.ts. In short, if a file requires a style, that file name becomes a folder, and two files are created under that folder. One contains the file's own name, and the other contains the code itself, prefixed with "Style" after the file name.

#### For example
```
screens
 |- Home             (folder)
  |- Home.tsx        (file write code here)
  |- HomeStyle.ts    (file write style code here)

components
 |- Header
   |- Header.tsx     (file, write code here)
   |- HeaderStyle.ts (file, write style code here)

```
