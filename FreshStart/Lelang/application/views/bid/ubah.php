<div class="container">

    <div class="row mt-3">
        <div class="col-md-6">

        <div class="card">
            <div class="card-header">
                Form Ubah Berita
            </div>
            <div class="card-body">
                <form action="" method="post">
                    <input type="hidden" name="id" value="<?= $berita['id_berita']; ?>">
                    <div class="form-group">
                        <label for="headline">Headline</label>
                        <input type="text" name="headline" class="form-control" id="headline" value="<?= $berita['headline']; ?>">
                        <small class="form-text text-danger"><?= form_error('headline'); ?></small>
                    </div>
                    <div class="form-group">
                        <label for="newsbody">News Body</label>
                        <textarea name="newsbody" class="form-control" id="newsbody" rows="3"><?= $berita['newsbody']; ?></textarea>
                        <small class="form-text text-danger"><?= form_error('newsbody'); ?></small>
                    </div>
                    <div class="form-group">
                        <label for="merkhp">Merk Handphone</label>
                        <select class="form-control" id="merkhp" name="merkhp">
                            <?php foreach( $merkhp as $mhp ) : ?>
                                <?php if( $mhp == $berita['merkhp'] ) : ?>
                                    <option value="<?= $mhp; ?>" selected><?= $mhp; ?></option>
                                <?php else : ?>
                                    <option value="<?= $mhp; ?>"><?= $mhp; ?></option>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <button type="submit" name="ubah" class="btn btn-primary float-right">Ubah Berita</button>
                </form>
          
            </div>
        </div>
        
        
        
        </div>
    </div>


</div>