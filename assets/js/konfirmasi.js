function hapusMenu(url) {
    Swal.fire({
        title: 'Are you sure?',
             text: "Yakin Ingin hapus menu?",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             canceluttonColor: '#d33',
             confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    });
}

function hapusRole(url) {
    Swal.fire({
        title: 'Are you sure?',
             text: "Yakin Ingin hapus role?",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             canceluttonColor: '#d33',
             confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
        
    });
}

function hapusSubmenu(url) {
    Swal.fire({
        title: 'Are you sure?',
             text: "Yakin Ingin hapus sub menu?",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             canceluttonColor: '#d33',
             confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
        
    });
}