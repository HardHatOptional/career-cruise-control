@echo off
echo Copying Dodge Challenge files to the public folder...

REM Create the target directory if it doesn't exist
if not exist ..\public\DodgeChallenge mkdir ..\public\DodgeChallenge

REM Copy all files from the DodgeChallenge folder to public/DodgeChallenge
xcopy /E /Y /I ..\DodgeChallenge\*.* ..\public\DodgeChallenge

echo.
echo Files copied successfully!
echo Your game is now ready to be embedded in your Next.js app.
echo.
pause