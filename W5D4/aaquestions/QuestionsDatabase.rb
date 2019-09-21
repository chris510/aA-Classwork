require 'sqlite3'
require "singleton"

class QuestionsDataBase < SQLite3::Database
  include Singleton

  def initialize
    super('alexs_db.db')
    self.type_translation = true
    self.results_as_hash = true
  end

end

class Users
  attr_accessor :fname, :lname

  def self.all
    data = QuestionsDataBase.instance.execute("SELECT * FROM users")
    data.map { |datum| Users.new(datum) }
  end

  def self.find_by_id(id)
    person = QuestionsDataBase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless person.length > 0
    
    User.new(person.first)
  end

  def self.find_by_name(fname, lname)
    person = QuestionsDataBase.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ?, lname = ?
    SQL
    return nil unless person.length > 0
    User.new(person.new)
  end

  def initialize(options)
    @fname = options['fname']
    @lname = options['lname']
  end
end

class Questions

  attr_accessor :id, :title, :body, :author_id

  def self.all
    data = QuestionsDataBase.instance.execute("SELECT * FROM questions")
    data.map { |datum| Users.new(datum) }
  end

  def self.find_by_id(id)
    question = QuestionsDataBase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless question.length > 0
    
    User.new(question.first)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end
end

class Question_follows

  attr_accessor :id, :user_id, :question_id

  def self.all
    data = QuestionsDataBase.instance.execute("SELECT * FROM question_follows")
    data.map { |datum| Users.new(datum) }
  end

  def self.find_by_id(id)
    question_follows = QuestionsDataBase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless question_follows.length > 0
    User.new(question_follows.first)
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end
end

class Replies

  attr_accessor :id, :question_id, :parent_reply_id, :author_id, :body

  def self.all
    data = QuestionsDataBase.instance.execute("SELECT * FROM replies")
    data.map { |datum| Users.new(datum) }
  end

  def self.find_by_id(id)
    replies = QuestionsDataBase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless replies.length > 0
    
    User.new(replies.first)
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @author_id = options['author_id']
    @body = options['body']
  end
end