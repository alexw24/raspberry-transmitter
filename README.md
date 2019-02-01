# raspberry-transmitter
Repository for Luke and Alex's raspberry pi project. The goal of this project is to transmit data wirelessly from a raspberry pi to a server.

## Setting up a Raspbian VM

- Download [VirtualBox](https://www.virtualbox.org)
- Download a [Raspbian ISO file](https://www.raspberrypi.org/downloads/raspberry-pi-desktop/)
- Create a new virtual machine
    - Other Linux (32 bit)
- Install Node.JS
    - use version 9.x or older, 10.x or later doesn't seem to work on Raspbian OS, and npm would not install.
-following are the commands you need to run as you install Node.JS onto your rasberry pi;
- sudo apt remove nodered
- sudo apt remove node nodejs-legacy 
- sudo apt remove --purge node 
the commands above will remove any node that might be in the VM.
- curl -sL https://deb.nodesource.com/setup_9.x | sudo bash -
- then sudo apt-get install nodejs
this should add version 9.11 with npm 5.6
