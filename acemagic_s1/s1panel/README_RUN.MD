We need RAW access from container user to usb for libusb.
sudo nano /etc/udev/rules.d/99-ch340.rules
add this line:
SUBSYSTEM=="usb", ATTR{idVendor}=="1a86", ATTR{idProduct}=="7523", MODE="0666"
save
sudo udevadm control --reload-rules
sudo udevadm trigger

#sudo docker run --device /dev/ttyUSB0 --device /dev/bus/usb -p 8686:8686 s1panel-service

sudo docker run --network=host \
  -v /sys/class/net:/sys/class/net:ro \
  --device /dev/ttyUSB0 \
  --device /dev/bus/usb \
  --privileged \
  -p 8686:8686 \
  s1panel-service

sudo docker run -d \
  --name s1panel \
  --network=host \
  -v /sys/class/net:/sys/class/net:ro \
  --device /dev/ttyUSB0 \
  --device /dev/bus/usb \
  --privileged \
  --restart=unless-stopped \
  s1panel-service


Both devices are needed, raw for display and normaly tty for serial control of RGB led


