#!/usr/bin/env bash
dotnet publish ./src/SlowSlothBudget.Web -c Release -o out
if [[ $? -ne 0 ]] ; then
    exit 1
fi
cp -r ./src/SlowSlothBudget.Web/out ./out
docker info
docker build -t slowsloth/slowslothbudget-web .