FROM microsoft/aspnetcore:2.0.0
RUN buildDeps='gnupg' \
    && set -x \
    && apt-get update && apt-get install -y $buildDeps --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt install nodejs -y \
    && rm -rf /usr/lib/systemd/* \
    && apt-get purge -y --auto-remove $buildDeps \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
    && node -v

WORKDIR /app
COPY ./out .
ENTRYPOINT ["dotnet", "SlowSlothBudget.Web.dll"]