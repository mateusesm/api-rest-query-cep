### Rest API for zip code queries

A simple Rest API make with JavaScript/NodeJS using Express for setting server and Jest for tests that receives a zip code for POST method and returns complete adress and a fictitious shipping tax for each region.

The Rest API used the follow Rest APIS already available:

ViaCEP API (https://viacep.com.br/) to query adress by CEP.

IBGE API (https://servicodados.ibge.gov.br/api/docs) to query the region by uf.

### Installation

After downloading this project, make sure you have Node JS installed on your machine by running the following command:

```bash
node --version
```

The command should return the version of Node JS installed. If not, download it.

After installing Node JS, you will need to download the necessary modules, for that, inside the terminal, in the project folder execute the command:

Use your preferred package manager (npm, yarn, etc.) to install all dependencies, in my case, I used npm:

```bash
npm install
```

### Running the project

For running express server, run the next command:

```bash
npm run dev
```