.. _sphinx-chapter:
   
.. meta::
    :description: WebSocket Клиент для 1С. Внешний компонент (Документация). Использование клиента websocket для 1С: Предприятие
    :keywords: websocket, client

.. meta::
    :http-equiv=Content-Type: text/html; charset=utf-8

=======================================
Клиент websocket
=======================================

Инициализация
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. index:: Новый
.. function:: Новый("AddIn.WebSocket.Client");

    Синоним: New()

    Инициализация внешнего компонента (Клмент). Полученный таким образом объект используется для дальнейшего взаимодействия.
    

Пример использования:

.. code-block:: bsl
   :linenos:

    Клиент = Новый("AddIn.WebSocket.Client");

