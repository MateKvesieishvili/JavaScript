fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    function User(id, name, username, email, address, phone, website, company) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.email = email;
      this.address = address;
      this.phone = phone;
      this.website = website;
      this.company = company;
    }

    const users = data.map(user => {
      const address = {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        geo: user.address.geo
      };
      const company = {
        name: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs
      };

      return new User(user.id, user.name, user.username, user.email, address, user.phone, user.website, company);
    });

    console.log(users);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });