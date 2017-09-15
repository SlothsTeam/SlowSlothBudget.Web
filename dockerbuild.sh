#!/usr/bin/env bash
dotnet publish ./src/SlowSlothBudget.Web -c Release -o out
cp -r ./src/SlowSlothBudget.Web/out ./out
docker info
docker build -t slowsloth/slowslothbudget-web .