document.getElementById('divulgarBtn').addEventListener('click', function() {
    document.getElementById('uploadSection').classList.toggle('hidden');
});

document.getElementById('servidoresBtn').addEventListener('click', function() {
    document.getElementById('serverList').classList.toggle('hidden');
});

document.getElementById('contatoBtn').addEventListener('click', function() {
    document.getElementById('contatoSection').classList.toggle('hidden');
});

document.getElementById('cancelarBtn').addEventListener('click', function() {
    document.getElementById('uploadSection').classList.add('hidden');
});

document.getElementById('fecharContatoBtn').addEventListener('click', function() {
    document.getElementById('contatoSection').classList.add('hidden');
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const serverLogo = document.getElementById('serverLogo').files[0];
    const discordLink = document.getElementById('discordLink').value;
    const partnershipModel = document.getElementById('partnershipModel').value;
    const gamePhotos = document.getElementById('gamePhotos').files;

    const reader = new FileReader();
    reader.onload = function(event) {
        const serverCard = document.createElement('div');
        serverCard.className = 'server-card';

        const logo = document.createElement('img');
        logo.src = event.target.result;
        logo.style.maxWidth = '100%'; // Limita a largura da logo
        serverCard.appendChild(logo);

        const discordLinkElement = document.createElement('a');
        discordLinkElement.href = discordLink;
        discordLinkElement.target = '_blank';
        discordLinkElement.innerText = partnershipModel;
        serverCard.appendChild(discordLinkElement);

        // Exibe as fotos do jogo
        for (let i = 0; i < gamePhotos.length; i++) {
            const photoReader = new FileReader();
            photoReader.onload = function(photoEvent) {
                const img = document.createElement('img');
                img.src = photoEvent.target.result;
                img.style.maxWidth = '80%'; // Limita a largura das fotos
                img.style.margin = '5px'; // Margem entre as fotos
                serverCard.appendChild(img);
            }
            photoReader.readAsDataURL(gamePhotos[i]);
        }

        document.getElementById('serversContainer').appendChild(serverCard);
        document.getElementById('uploadSection').classList.add('hidden');
        document.getElementById('uploadForm').reset(); // Reseta o formulário
    }

    reader.readAsDataURL(serverLogo);
});
