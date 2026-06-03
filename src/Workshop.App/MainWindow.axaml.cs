using Avalonia.Controls;
using Workshop.App.Native;
using Workshop.App.ViewModels;

namespace Workshop.App;

public sealed partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        DataContext = MainWindowViewModel.Load();
    }
}
