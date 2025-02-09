//Добавленные здесь типы могут использоваться в проекте глобально без их импорта.

type ConversationType = {
    id: string;
    fullName: string;
    profilePic: string;
}

type MessageType = {
    id: string;
    body: string;
    senderId: string;
    createdAt: string;
    shouldShake?: boolean;
}