#!/usr/bin/env sh

if [ -d assets ]; then
	rm -rf assets
fi

mkdir assets
cp -R ionic/scss ./assets
cp -R ionic/release/fonts ./assets