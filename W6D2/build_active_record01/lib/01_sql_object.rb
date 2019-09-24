require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @col if !@col.nil?
    col = DBConnection.execute2(<<-SQL)
    SELECT
      *
    FROM
      #{self.table_name}
    SQL

    @col = col.first.map! { |c| c.to_sym }
    
  end

  def self.finalize!
    cols = self.columns
    cols.each do |c|
      define_method(c) do
        self.attributes[c]
      end

      define_method("#{c}=") do |val|
        self.attributes[c] = val 
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name

  end

  def self.table_name
    @table_name || self.to_s.tableize
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
    SELECT
      #{self.table_name}.*
    FROM
      #{self.table_name}
    SQL

    parse_all(results)
    
  end

  def self.parse_all(results)
    results.map { |r| self.new(r) }
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    cols = self.class.columns
    params.each do |attr_name, val|
      if cols.include?(attr_name)
        self.send("#{attr_name}=", val)
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
