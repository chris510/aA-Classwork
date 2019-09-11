class Employee 

  attr_reader :name, :title, :salary, :boss, :employees

  def initialize(name, title, salary, boss = nil)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    @salary * multiplier
  end

  def boss=(name)
    @boss = name
  end

  def has_boss
    unless @boss == nil
      @boss.employees << self
    end
  end



end

class Manager < Employee

  def initialize(name, title, salary, boss= nil)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
    @employees = []
  end

  def has_boss
    if @boss
      boss.employees << self
    end
  end


  def bonus(multiplier)
    total_salary = 0
    @employees.each do |employee|
      total_salary += employee.salary
    end
    total_salary * multiplier
  end

  

end

ned = Manager.new('ned','Founder', 1000000)
darren = Manager.new('darren', 'TA Manager', 78000, 'ned')
shawna = Employee.new('shawna', 'TA', 12000, 'darren')
david = Employee.new('david', 'TA', 10000, 'darren')

p shawna.has_boss
