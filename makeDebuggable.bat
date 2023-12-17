@echo off
set PATH=E:\Program Files\Android\build-tools\34.0.0;%PATH%
python .\makedebuggable\makeDebuggable.py apk base.apk baseDebuggable.apk resign.keystore androiddbg androiddbg
