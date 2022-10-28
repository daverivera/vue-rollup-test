Vagrant.configure("2") do |config|
    config.vm.provider "parallels" do |v|
      v.memory = "4096"
      v.cpus = 4
    end

    config.vm.box = "mpasternak/focal64-arm"
    config.vm.synced_folder '.', '/home/vagrant/workspace'

    config.vm.provision "shell", inline: "echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p"
    config.vm.provision "shell", inline: "curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -"
    config.vm.provision "shell", inline: "sudo apt-get install nodejs git -y"

    config.vm.network :forwarded_port, guest:3000, host: 3000
    config.vm.network :forwarded_port, guest:3001, host: 3001
end
