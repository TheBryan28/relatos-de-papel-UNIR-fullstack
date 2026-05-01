    const ProfileInfo = ({ user }) => {
    return (

            <div className="grid grid-cols-2 gap-6 rounded-[14px] border border-(--line) bg-(--panel) p-6">

    <div className="flex flex-col gap-3">
        <div>
        <p className="text-xs text-(--txt-secondary)">NOMBRE COMPLETO</p>
        <p className="text-lg font-semibold">{user.name}</p>
        </div>

        <div>
        <p className="text-xs text-(--txt-secondary)">CORREO ELÉCTRONICO</p>
        <p>{user.email}</p>
        </div>

        <div>
        <p className="text-xs text-(--txt-secondary)">TIPO DE CUENTA</p>
        <span className="inline-block rounded-full bg-(--bg-color) px-3 py-1 text-xs">
            PREMIUM MEMBER
        </span>
        </div>
    </div>

    <div className="flex flex-col justify-between rounded-[10px] bg-(--bg-color) p-4">
        <p className="font-semibold">DIRECCIONES DE ENVIO</p>
        <p className="font-semibold">Añadir Nueva</p>
        <p className="text-sm text-(--txt-secondary)">
        Calle falsa 123
        </p>
        <button className="mt-3 text-sm font-medium text-(--txt-color)">
        Editar dirección
        </button>
    </div>

    </div>
    );
    };
    export default ProfileInfo;