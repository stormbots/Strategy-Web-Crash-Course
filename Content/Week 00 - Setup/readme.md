# Setup

## Computer setup

- Download a virtual machine for linux mint
- Install Chrome, VSCodium, and Zoom
- on VSCodium, install live server
- In the terminal, enter `sudo apt update`
- Install node `sudo apt install nodejs`
- Install postgres `sudo apt install postgresql postgresql-contrib`
- Check if postgres is running `sudo systemctl status postgresql`
- Type `psql` in the terminal to view an error message for a username psql tries to connect to by default
- Connect to postgres `sudo -u postgres psql`
- Create a user with the username that showed up in the error message earlier `create user username;`
- Give all permissions to the user `alter role username with superuser;`
- Verify it it worked using `\du`. You should see the user with the superuser role
- Type `\q` to quit the session

## Github Setup

- ToDo
