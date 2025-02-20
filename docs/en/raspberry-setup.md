---
title: Raspberry Pi Setup
contributors: [LoSk-p, dergudzon, Leemo94]
translated: true
tools:   
  - Ubuntu Server 22.04 LTS
    https://ubuntu.com/download/raspberry-pi
  - Home Assistant 2022.8.2
  - robonomics-interface 1.3.4
    https://github.com/Multi-Agent-io/robonomics-interface/releases/tag/1.3.4
  - IPFS 0.14.0
    https://docs.ipfs.io/install/command-line/
---

For all methods from ["Overview"](/docs/home-assistant-begin/), the first thing you need to do is set up a Raspberry Pi. 
To set up Raspberry Pi you could use our "ready to use" image in **"Preinstalled image"** section or install all software directly in **"Manual installation"** section.

## Preinstalled image
The easiest way to setup you Raspberry is to use our prepared image. 
For downloading it, we will use IPFS. For this [install IPFS](https://docs.ipfs.tech/install/command-line/) and start it (Don't forget to make `ipfs init` for the first start):
```shell
ipfs daemon
```

In other terminal window download image:

Alternatively, you can download it [from url.](https://ipfs.io/ipfs/QmVKSwB6nXNjq8Yydb1unYWjahv2mz45ME4NTUw9mWBj2S?filename=rpi_hass.img.gz) (**Only with started IPFS Daemon**), but then you

```shell
ipfs get QmZTbvaBPQgeUDBGZg3WJQbP4QUyr8gSF6Uw89cLkY72sx -o rpi.img.xz
```

Then read the next chapter to install image.

<robo-wiki-title type="3" anchor="configuration-rpi"> 
  Configuration RPi
</robo-wiki-title>

Install [balena etcher](https://www.balena.io/etcher/) on your computer. Then, insert the SD card and run the Imager program. 
Select required image as the operating system and ensure to select your SD card from the storage dropdown, and then `flash` image.

<robo-wiki-picture src="home-assistant/balena.jpg" alt="Balena installer" />

Open the SD card's storage and navigate inside the root folder of the card. The name of the folder should be something similar to `system-boot`.

Find the file named `network-config` and open it in a text editor. Copy the text below and paste it into the file and insert your **wi-fi name** and **wi-fi password**:

```
version: 2
ethernets: 
  eth0:
    dhcp4: true
    optional: true
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      YOUR_WIFI_NAME:
        password: "YOUR_WIFI_PASSWORD"
```

<robo-wiki-note type="warning">Make sure that you input your actual Wi-Fi name and your Wi-Fi password.</robo-wiki-note>

<robo-wiki-note type="note">This Wi-Fi settings available only on first boot setup.
If later you need to change settings, please edit configuration file in `/etc/netplan/` folder. 
</robo-wiki-note>

Then you need to save the file, and insert the SD card to the Raspberry Pi and turn it on. It should connect to your wi-fi network. 

Now you need to find its address. To find address you can use [Fing app](https://www.fing.com/products). 
You can also find an RPi address with a `nmap` tool. Install it with:

<robo-wiki-tabs>
  <robo-wiki-tab title="Linux">
    <pre>sudo apt-get install nmap</pre>
  </robo-wiki-tab>
  <robo-wiki-tab title="OSX">
    <pre>brew install nmap</pre>
  </robo-wiki-tab>

  <robo-wiki-tab title="Other">

  [https://nmap.org/download.html](https://nmap.org/download.html)

  </robo-wiki-tab>
</robo-wiki-tabs>

Then find your address in the local network with:

<robo-wiki-tabs>
  <robo-wiki-tab title="Linux">
    <pre>ip a</pre>
  </robo-wiki-tab>
  <robo-wiki-tab title="OSX">
    <pre>ifconfig</pre>
  </robo-wiki-tab>
</robo-wiki-tabs>

<!-- ```bash
ip a
``` -->

It should look like `192.168.xx.xx` or `172.xx.xx.xx`.

Then scan your network as shown below replacing the last octet of the address with 0. (One may also use `arp -a` ):

```bash 
$ sudo nmap -sP 192.168.xx.0/24
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:03:27 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:02:46:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-27UBLNO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B2:7D:9E:95:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
```

In this example the Raspberry Pi's address is `192.168.43.56`. Now connect to it over ssh:

<robo-wiki-note type="note"> User is "ubuntu". Password is "ubuntu". </robo-wiki-note>

```bash
ssh ubuntu@192.168.43.56
```
If you have already installed our "ready to use" image, then go to the next article [MQTT Broker](/docs/mqtt-broker/).
Otherwise, continue manual installation.

## Manual Installation
If It's necessary, you can create PRi image manually. 
For this you should choose **[64-bit Ubuntu Server 22.04 LTS](https://cdimage.ubuntu.com/releases/22.04/release/ubuntu-22.04.1-preinstalled-server-arm64+raspi.img.xz) or newer**  and 
then repeat [Configuration RPi](#configuration-rpi).

### Home Assistant installation
Now we need to install Home Assistant to the Raspberry Pi. Official website of Home Assistant can be found [here](https://www.home-assistant.io/). 

We will install `Home Assistant Core`. Its actual version is 2022.8.2  and instruction assumes that you already have Python 3.9 or newer installed.

Let's start. The easiest way is to use our bash script `install.sh` to update system and install all dependencies automatically.
Download file to your Raspberry Pi. Then change user's rights for this file and start it:

```shell
curl -O https://raw.githubusercontent.com/LoSk-p/robonomics-hass-utils/main/raspberry_pi/install.sh
chmod a+x install.sh
bash install.sh
```

During installation process you will see the next request:

<robo-wiki-picture src="home-assistant/installation.jpg" alt="RPI installer" />

Just choose **ok** with `tab` button and press **enter**.
After script work is finished, go to the next article -  [MQTT Broker.](/docs/mqtt-broker/)

**Alternatively**, you can do all the job manually. 

Update your system and install necessary packages:

```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y python3 python3-dev python3-venv python3-pip libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion
```

Create user `homeassistant` and the directory for homeassistant core:

```bash
sudo useradd -rm homeassistant
sudo mkdir /srv/homeassistant
sudo chown homeassistant:homeassistant /srv/homeassistant
```

Next step is to create and switch to a virtual environment for Home Assistant Core. This should be done as the homeassistant user.

```bash
sudo -u homeassistant -H -s
cd /srv/homeassistant
python3 -m venv .
source bin/activate
```

As the result, you will find a name of the virtual environment in the brackets:
```bash
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ 
```


Then install required Python packages:

```bash
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ python3 -m pip install wheel~=0.37
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ pip3 install homeassistant==2022.8.2
```

Start Home Assistant Core for the first time. 
This will complete the installation for you,by automatically creating the `.homeassistant `configuration directory in the `/home/homeassistant` directory, and installing any basic dependencies:

```bash
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ hass
```

You can now reach your installation via the web interface on `http://%RASPBERRY_IP_ADDRESS%:8123`. 
In this example: `http://192.168.43.56:8123`

> You don't need to connect you raspberry to the monitor, you can open Web UI from any computer connected to your local network.

Wait until you will get "Hello window" in browser and then stop Home Assistant with `Ctrl+C`.

### IPFS installation
Also, we need [IPFS](https://ipfs.io/) for working with robonomics. As for the latest release of IPFS is 0.12.2. You can use our script to download ipfs and create systemd service with it.

```shell
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ exit
cd ~
wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh
sudo chmod +x install_ipfs.sh
./install_ipfs.sh
```

### Zigbee2MQTT setup
Now install necessary software for Zigbee2MQTT sticks:

```bash
# Set up Node.js repository and install Node.js + required dependencies
# NOTE: Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v16.15.0/ e.g. Version 16.15.0 should work.
sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc

# Verify that the correct nodejs and npm (automatically installed with nodejs)
# version has been installed
node --version  # Should output v14.X, V16.x, V17.x or V18.X
npm --version  # Should output 6.X, 7.X or 8.X

# Create a directory for zigbee2mqtt and set your user as owner of it
sudo mkdir /opt/zigbee2mqtt
sudo chown -R ${USER}: /opt/zigbee2mqtt

# Clone Zigbee2MQTT repository
git clone --depth 1 --branch 1.28.0 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt

# Install dependencies (as user "pi")
cd /opt/zigbee2mqtt
npm ci
```

Note that the `npm ci` could produce some `warning` which can be ignored.

### Systemd services

If you don't want to start Home assistant manually everytime, create systemd service.

Create new service for Home Assistant to start: 

```bash
ubuntu@ubuntu:~$ sudo nano /etc/systemd/system/home-assistant@homeassistant.service 
```

Paste the following:

```
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure

User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/home/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"

[Install]
WantedBy=multi-user.target
```

After that enable and start the service:

```bash
sudo systemctl enable home-assistant@homeassistant.service
sudo systemctl start home-assistant@homeassistant.service
```

### Add custom integration

Integrations allow Home Assistant to record datalogs with encrypted data from Home Assistant and listen to launch commands to control smart devices. Integrations use IPFS to store data and send IPFS hash in datalog or launch.

On your Raspberry Pi with Home Assistant log in homeassistant user:
```bash 
sudo -u homeassistant -H -s
```
Source virtual environment and install python packages:

```bash
source /srv/homeassistant/bin/activate
pip install robonomics-interface~=1.3
```

Then go to `.homeassistant` directory:

```bash
cd /home/homeassistant/.homeassistant
```
Create folder `custom_components` and clone in there the repository with the integration:

```bash
mkdir custom_components
cd custom_components
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
```

After that exit Home Assistant user and restart service:

```shell
exit
sudo systemctl restart home-assistant@homeassistant.service
```

That's all. Next step is to install [MQTT Broker.](/docs/mqtt-broker/)