# AceMagic/Firebat S1 Panel Home Assistant Add-on (s1panel-ha-addon)

[English](#english) | [Русский](#russian)

<a name="russian"></a>
## Русский

**s1panel-ha-addon** — это аддон для Home Assistant, предназначенный для управления встроенным LCD-дисплеем мини-ПК (например, **AceMagic S1** или **Firebat S1**) и отображения на нем параметров системы.

Проект находится на **ранней стадии разработки**. Используйте с осторожностью.

### Благодарности
Основано на репозитории [adriebaselmans/AceMagic-S1-LED-TFT-Linux](https://github.com/adriebaselmans/AceMagic-S1-LED-TFT-Linux). Огромная благодарность автору за базу для работы с дисплеем!

### Установка
1. Перейдите в **Настройки** > **Дополнения** > **Магазин дополнений** в вашем Home Assistant.
2. Нажмите на три точки (вверху справа) > **Репозитории**.
3. Добавьте URL: `https://github.com/rlobanov/s1panel-ha-addon` и нажмите **Добавить**.
4. Обновите список аддонов и найдите **"AceMagic S1 Panel"**.
5. Установите и **Запустите** дополнение.

### Использование
На данный момент веб-интерфейс (GUI) доступен по адресу:  
`http://<IP-вашего-HA>:8686/`

### Планы по разработке (To-Do)
- [ ] Интеграция веб-интерфейса напрямую в боковую панель Home Assistant (поддержка Ingress).
- [ ] Добавление новых кастомных макетов для отображения сенсоров.
- [ ] Тестирование.

<a name="english"></a>
## English

**s1panel-ha-addon** is a Home Assistant add-on designed to control and customize the built-in LCD display on mini-PCs such as the **AceMagic S1** or **Firebat S1**.

This project is in the **early stages of development**. Use with caution.

### Credits
Based on the excellent work by [adriebaselmans/AceMagic-S1-LED-TFT-Linux](https://github.com/adriebaselmans/AceMagic-S1-LED-TFT-Linux). Huge thanks for the reverse engineering and initial implementation!

### Installation
1. Navigate to **Settings** > **Add-ons** > **Add-on Store** in your Home Assistant.
2. Click the three dots (top right) > **Repositories**.
3. Add the following URL: `https://github.com/rlobanov/s1panel-ha-addon` and click **Add**.
4. Refresh/Update the store and find **"AceMagic S1 Panel"**.
5. Install and **Start** the add-on.

### Usage
Currently, the Web UI for configuration is available at:  
`http://<your-ha-ip>:8686/`

### Roadmap / To-Do
- [ ] Implement native Home Assistant Sidebar integration (Ingress support).
- [ ] Add more customizable sensor layouts.
- [ ] Conduct stability testing.

---
