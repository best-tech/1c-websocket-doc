.. _sphinx-chapter:
   
.. meta::
    :description: WebSocket клиент и сервер для 1С. Внешний компонент (Документация)
    :keywords: 1С, WebSocket, rpc

.. meta::
    :http-equiv=Content-Type: text/html; charset=utf-8

===================================================
Подключение компонента
===================================================

&НаСервере
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. index:: ПодключитьВнешнююКомпоненту
.. function:: ПодключитьВнешнююКомпоненту()

    Синоним: **AttachAddIn()**

    Подключает компонент, выполненный по технологии Native API. 
    Компонент может храниться в информационной базе или макете конфигурации в виде двоичных данных или в ZIP-архиве.
    Для режимов запуска "Тонкий клиент" и "Веб-клиент", компонент должен быть предварительно установлен методом ``УстановитьВнешнююКомпоненту()``. 

Пример использования:

.. code-block:: bsl
   :linenos:

    ПутьКомпоненты = "ОбщийМакет.МакетКомпоненты";
		
    Если НЕ ПодключитьВнешнююКомпоненту(ПутьКомпоненты,"WebSocket", ТипВнешнейКомпоненты.Native) Тогда
        ВызватьИсключение "Ошибка подключения внешнего компонента";
    КонецЕсли;

        
&НаКлиенте
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. index:: УстановитьВнешнююКомпоненту
.. function:: УстановитьВнешнююКомпоненту()

    Синоним: **InstallAddIn()**
    
    Доставляет объект внешнего компонента с сервера на клиент, после чего он становится доступен для метода ``ПодключитьВнешнююКомпоненту()``.

    Примечание:

    Метод работает только с компонентами, хранящимися в архиве.

    Если для конфигурации свойство РежимИспользованияМодальности установлено в НеИспользовать, следует использовать метод ``НачатьУстановкуВнешнейКомпоненты()``. 

Пример использования:

.. code-block:: bsl
   :linenos:

    ПутьКомпоненты = "ОбщийМакет.МакетКомпоненты";
	
    УстановитьВнешнююКомпоненту(ПутьКомпоненты);

    Если НЕ ПодключитьВнешнююКомпоненту(ПутьКомпоненты,"WebSocket", ТипВнешнейКомпоненты.Native) Тогда
        ВызватьИсключение "Ошибка подключения внешнего компонента";
    КонецЕсли;


MANIFEST.XML
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. index:: MANIFEST
.. only:: html

    Файл предназначен для описания zip-архива файлов внешних компонент для использования на разных платформах

Пример файла:

.. code-block:: xml
   :linenos:

    <?xml version="1.0" encoding="UTF-8" ?>
    <bundle xmlns="http://v8.1c.ru/8.2/addin/bundle" name="YouComponentName">
    <component os="Windows" path="AddIn_ChrWindows_x86.exe" type="plugin" object="com.YourCompanyName.YouExtensionName.1" arch="i386" client="Firefox" clientVersion="40.*" />
    <component os="Linux" path="AddIn_ChrLinux_x86.sh" type="plugin" object="com.YourCompanyName.YouExtensionName.1" arch="i386" client="Firefox" clientVersion="40.*" />
    <component os="Linux" path="AddIn_ChrLinux_x86_64.sh" type="plugin" object="com.YourCompanyName.YouExtensionName.1" arch="x86_64" client="Firefox" clientVersion="40.*" />
    <component os="Windows" path="Addin_IEWindows_x86.cab" type="plugin" object="MyComponentIE.AddInServiceEx" arch="i386" client="MSIE" />
    <component os="Windows" path="AddIn_IEWindows_x86_64.cab" type="plugin" object="MyComponentIE.AddInServiceEx" arch="x86_64" client="MSIE" />
    <component os="Windows" path="AddIn_ChrWindows_x86.exe" type="plugin" object="com.YourCompanyName.YouExtensionName.1" arch="i386" client="Chrome" />
    <component os="Linux" path="AddIn_ChrLinux_x86.sh" type="plugin" object="com.YourCompanyName.YouExtensionName.1" arch="i386" client="Chrome" />
    <component os="Linux" path="AddIn_ChrLinux_x86_64.sh" type="plugin" object="com.YourCompanyName.YouExtensionName.1" arch="x86_64" client="Chrome" />
    <component os="MacOS" path="AddIn_SafMacOS_x86.pkg" type="plugin" object="application/component-example-1" arch="i386" client="Safari" />
    <component os="Windows" path="AddInNative.dll" type="native" arch="i386" />
    <component os="Windows" path="AddInNative64.dll" type="native" arch="x86_64" />
    <component os="Linux" path="AddInNative.so" type="native" arch="i386" />
    <component os="Linux" path="AddInNative64.so" type="native" arch="x86_64" />
    <component os="iOS" path="AddInNative_iOS.dylib" type="native" arch="Universal" buildType="developer" />
    <component os="iOS" path="AddInNative_iOS.a" type="native" arch="Universal" buildType="release" />
    <component os="Android" path="libAddInNative_Android_i386.so" type="native" arch="i386" codeType="c++" />
    <component os="Android" path="AddInNative_Android.apk" type="native" arch="i386" codeType="java" />
    <component os="Android" path="libAddInNative_Android_ARM.so" type="native" arch="ARM" codeType="c++" />
    <component os="Android" path="AddInNative_Android.apk" type="native" arch="ARM" codeType="java" />
    <component os="WindowsRuntimePhone" path="AddInNative_WinRT_Phone_ARM.dll" type="native" arch="ARM" />
    <component os="WindowsRuntimePhone" path="AddInNative_WinRT_Phone_Win32.dll" type="native" arch="i386" />
    <component os="WindowsRuntime" path="AddInNative_WinRT_x64.dll" type="native" arch="x86_64" />
    <component os="WindowsRuntime" path="AddInNative_WinRT_Win32.dll" type="native" arch="i386" />
    </bundle>,