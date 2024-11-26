<!DOCTYPE html>
  <html lang="id">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login - System</title>
      <link rel="stylesheet" href="style.css" />
      <script src="script.js"></script>
      <?php
      include 'login.php';
      ?>
      </head>
      <body>
        <div class="container">
          <div  
          class="background">
          </div>
          <div class="login-web">
            <div class="logo">
              <div 
              class="logo-rectangle">
              </div>
              <form method="POST">
                <div class="form-group">
                  <input type="text" name="username" placeholder="Username" required>
                  </div>
                <div class="form-group">
                  <input type="password" name="password" placeholder="Password" required>
                </div>
                <button name="submit"type="submit" class="login-btn">Login</button>
                <a href="#" >Lupa password?</a>
              </form>
            </div>  
          </div>
        </div>
      </body>
    </html>
