

// details get.request //

app.get('/details/:user_id', authenticationMiddleware, async (req, res) => {
    const { user_id } = req.params;
    try {
      const user = await User.findOne({ where: { user_id } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // update put.request // 

  app.put('/update', authenticationMiddleware, async (req, res) => {
    const newDetails = req.body;
    try {
      await User.update(newDetails, { where: { user_id: newDetails.user_id } });
      return res.json({ message: 'User details updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // image get.request //

  app.get('/image/:user_id', authenticationMiddleware, async (req, res) => {
    const { user_id } = req.params;
    try {
      const user = await User.findOne({ where: { user_id } });
      if (!user || !user.user_image) {
        return res.status(404).json({ message: 'Image not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // insert post.request //

  app.post('/insert', authenticationMiddleware, async (req, res) => {
    const user = req.body.user_details;
    try {
      const newUser = await User.create(user);
      return res.json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // delete delete.request // 

  app.delete('/delete/:user_id', authenticationMiddleware, async (req, res) => {
    const { user_id } = req.params;
    try {
      await User.destroy({ where: { user_id } });
      return res.json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
  
  