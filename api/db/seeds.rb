# ユーザーデータの挿入
users = User.create!([
  { username: "Alice", email: "alice@example.com", password_digest: BCrypt::Password.create("password123") },
  { username: "Bob", email: "bob@example.com", password_digest: BCrypt::Password.create("password123") },
  { username: "Carol", email: "carol@example.com", password_digest: BCrypt::Password.create("password123") }
])

# 各ユーザーに対応する記事のデータを挿入
articles = Article.create!([
  { title: "First Article", content: "This is the content of the first article by Alice.", user: users[0] },
  { title: "Second Article", content: "This is the content of the second article by Bob.", user: users[1] },
  { title: "Third Article", content: "This is the content of the third article by Carol.", user: users[2] }
])
