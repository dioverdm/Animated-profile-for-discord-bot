const fs = require('fs');

/*ES: Reemplaza 'YOUR_TOKEN' con el token de tu bot
EN: Replace 'YOUR_TOKEN' with your bot's token*/
const token = 'YOUR_TOKEN';

async function updateAvatar() {
    try {
        const newAvatar = fs.readFileSync('avatar.gif'); // Ruta al nuevo archivo de imagen de avatar / Path to the new avatar image file
        const response = await fetch('https://discord.com/api/v9/users/@me', {
            method: 'PATCH',
            headers: {
                Authorization: `Bot ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: `data:image/gif;base64,${newAvatar.toString('base64')}`
            })
        });

        if (response.ok) {
            console.log('ES: ¡Avatar actualizado exitosamente!\nEN: Avatar updated successfully!');
        } else {
            console.error('ES: No se pudo actualizar el avatar / EN: Failed to update avatar:', response.statusText);
            const responseBody = await response.text();
            console.error('ES: Cuerpo de respuesta / EN: Response body:', responseBody);
        }
    } catch (error) {
        console.error('ES: Error al actualizar avatar / EN: Error updating avatar:', error);
    }
}

updateAvatar();

/* Este codigo fue dedarrollado por Custom o mejor conocido como dioverdm siguelo en sus redes sociales:

https://instagram.com/dioverdm
https://facebook.com/dioverrdm
https://twitter.com/dioverdm
https://github.com/dioverdm
https://youtube.com/@dioverdm
https://tiktok.com/@dioverdm
https://discord.gg/SqS7zQgAdP
*/
