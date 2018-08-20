deploy:
	ssh neomad "cd ~/styleguide && git pull origin master && npm install && npm run build"
