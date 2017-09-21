@echo off
set JAVA_DIR=".\\java\\"
set CPP_DIR=".\\cpp\\"
set PYTHON_DIR=".\\python\\"

if not exist %JAVA_DIR% md %JAVA_DIR%
if not exist %CPP_DIR% md %CPP_DIR%
if not exist %PYTHON_DIR% md %PYTHON_DIR%

call protoc.exe --proto_path=".\\" --cpp_out=%CPP_DIR% --java_out=%JAVA_DIR% --python_out=%PYTHON_DIR% *.proto

pause