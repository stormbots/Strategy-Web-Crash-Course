# Setup

## Computer setup

- Download a virtual machine for linux mint
- Install Chrome, VSCodium, and Zoom
- on VSCodium, install live server
- In the terminal, enter `sudo apt update`
- Install node `sudo apt install nodejs`
- Install postgres `sudo apt install postgresql postgresql-contrib`
- Install git `sudo apt install git`
- Check if postgres is running `sudo systemctl status postgresql`
- Type `psql` in the terminal to view an error message for a username psql tries to connect to by default
- Connect to postgres `sudo -u postgres psql`
- Create a user with the username that showed up in the error message earlier `create user username;`
- Give all permissions to the user `alter role username with superuser;`
- Verify it it worked using `\du`. You should see the user with the superuser role
- Type `\q` to quit the session

## Github Setup

- In the terminal, add your github username and email using `git config --global user.name "username"` and `git config --global user.email "email"`.
- Generate an ssh key using `ssh-keygen -t ed25519 -C "email"`.
- Start ssh agent and add key using `eval "$(ssh-agent -s)"` and `ssh-add ~/.ssh/id_ed25519`.
- Get your public key using `cat ~/.ssh/id_ed25519.pub`. Copy your key.
- Go to `Settings` in GitHub, then under Access click on `SSH and GPG keys`. Click on `New SSH key`, put Robotics in the title, and paste your key. Then click `Add SSH key`.
