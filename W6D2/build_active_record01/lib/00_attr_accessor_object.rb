class AttrAccessorObject
  def self.my_attr_accessor(*names)

    names.each do |name|

      #getter
      define_method(name) do
        instance_variable_get("@#{name}") #@:name @name
      end
    
      #setter
      define_method("#{name}=") do |value|
        instance_variable_set("@#{name}", value)
      end

    end

  
  end
end























     # define_method(name) do 
      #   instance_variable_get("@#{name}")
      # end

      # define_method(name) do |value = @x|
      #   instance_variable_set("@#{name}", value)
      # end


  #     def self.all
  #   results = DBConnection.execute(<<-SQL)
  #     SELECT
  #       #{table_name}.*
  #     FROM
  #       #{table_name}
  #   SQL

  #   parse_all(results)
  # end

  # def self.parse_all(results)
  #   results.map { |result| self.new(result) }
  # end

  #self.send("#{attr_name}=", value)