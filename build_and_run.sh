#!/bin/bash
AMARELO='\033[1;33m';
NC='\033[0m'
echo "${AMARELO}Executando a build${NC}"
ionic build android
echo "${AMARELO}Preparando o cordova android${NC}"
cordova prepare android
echo "${AMARELO}Run aplicativo${NC}" 
ionic run android
