<div class="container">

    <div class="row mt-3">
        <div class="col-md-6">

        <div class="card">
            <div class="card-header">
                Form Tambah Berita
            </div>
            <div class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <label for="headline">Headline</label>
                        <input type="text" name="headline" class="form-control" id="headline">
                        <small class="form-text text-danger"><?= form_error('headline'); ?></small>
                    </div>
                    <div class="form-group">
                        <label for="newsbody">News Body</label>
                        <textarea name="newsbody" class="form-control" id="newsbody" rows="3"></textarea>
                        <small class="form-text text-danger"><?= form_error('newsbody'); ?></small>
                    </div>
                    <div class="form-group">
                        <label for="merkhp">Merk Handphone</label>
                        <select class="form-control" id="merkhp" name="merkhp">
                            <option value="Samsung">Samsung</option>
                            <option value="Apple">Apple</option>
                            <option value="Xiaomi">Xiaomi</option>
                            <option value="Huawei">Huawei</option>
                            <option value="Oppo">Oppo</option>
                            <option value="Vivo">Vivo</option>
                            <option value="Asus">Asus</option>
                        </select>
                    </div>
                    <button type="submit" name="tambah" class="btn btn-primary float-right">Tambah Berita</button>
                </form>
          
            </div>
        </div>
        
        
        
        </div>
    </div>


</div>